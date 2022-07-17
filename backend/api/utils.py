class PredictionModel:
    def __init__(self, encoder, model):
        import pickle
        self.encoder = encoder
        self.model = model

    def predict(self, inp):
        import numpy as np

        encoded_part = self.encoder.transform(inp[['Species']]).toarray()
        X = inp.drop(['Species'], axis=1)
        np.hstack([X.values, encoded_part])

        return self.model.predict(X)


def format_float(arr):
    float_formatter = "{:.2f}".format
    for i in range(len(arr)):
        arr[i] = float_formatter(arr[i])

