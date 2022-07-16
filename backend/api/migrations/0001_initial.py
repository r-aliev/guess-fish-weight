# Generated by Django 4.0 on 2022-07-16 11:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Fish',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('species', models.CharField(choices=[('SMELT', 'Smelt'), ('PIKE', 'Pike'), ('PERCH', 'Perch'), ('PARKKI', 'Parkki'), ('WHITEFISH', 'Whitefish')], max_length=35, null=True)),
                ('vertical_length', models.CharField(blank=True, max_length=255, null=True)),
                ('diagonal_length', models.CharField(blank=True, max_length=255, null=True)),
                ('cross_length', models.CharField(blank=True, max_length=255, null=True)),
                ('height', models.CharField(blank=True, max_length=255, null=True)),
                ('width', models.CharField(blank=True, max_length=255, null=True)),
            ],
        ),
    ]
