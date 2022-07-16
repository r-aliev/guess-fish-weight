from django.db import models


# Create your models here.
class Fish(models.Model):
    SPECIES_SMELT = 'SMELT'
    SPECIES_PIKE = 'PIKE'
    SPECIES_PERCH = 'PERCH'
    SPECIES_PARKKI = 'PARKKI'
    SPECIES_WHITEFISH = 'WHITEFISH'
    SPECIES_ROACH = 'ROACH'
    SPECIES_BREAM = 'BREAM'

    FISH_SPECIES = [
        (SPECIES_SMELT, 'Smelt'),
        (SPECIES_PIKE, 'Pike'),
        (SPECIES_PERCH, 'Perch'),
        (SPECIES_PARKKI, 'Parkki'),
        (SPECIES_WHITEFISH, 'Whitefish'),
        (SPECIES_ROACH, 'Roach'),
        (SPECIES_BREAM, 'Bream'),
    ]

    species = models.CharField(
        max_length=35, choices=FISH_SPECIES, blank=False, null=True
    )

    vertical_length = models.CharField(max_length=255, null=True, blank=True)
    diagonal_length = models.CharField(max_length=255, null=True, blank=True)
    cross_length = models.CharField(max_length=255, null=True, blank=True)
    height = models.CharField(max_length=255, null=True, blank=True)
    width = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.species
