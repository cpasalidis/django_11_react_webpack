# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class Card(models.Model):
    text = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text

# Create your models here.
