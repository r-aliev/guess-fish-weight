from django.http import JsonResponse
from rest_framework import status

from rest_framework.decorators import api_view
from rest_framework.decorators import parser_classes
from rest_framework.parsers import MultiPartParser
from .apps import ApiConfig
from .utils import format_float


@api_view(['GET', 'POST'])
@parser_classes([MultiPartParser])
def guess_fishes(request):
    import pandas as pd
    if request.method == 'GET':
        file_path = 'api/fish_samples.csv'
        data = pd.read_csv(file_path)
        data.rename(columns={data.columns[0]: "Weight"}, inplace=True)
        print(data)
        return JsonResponse(data={'sampleData': data.to_json(orient='records')}, status=status.HTTP_200_OK)

    if request.method == 'POST':
        file_obj = request.FILES.get('file')

        if file_obj:
            data = pd.read_csv(file_obj)

            model = ApiConfig.model

            prediction = model.predict(data)
            format_float(prediction)

            data['Weight'] = prediction

            return JsonResponse(data={'prediction': data.to_json(orient='records')}, status=status.HTTP_200_OK)

        return JsonResponse(data={"message": f"File was not uploaded, try again please"},
                            status=status.HTTP_404_NOT_FOUND)
