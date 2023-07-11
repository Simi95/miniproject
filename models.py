
from django.db import models
class TimeClock(models.Model):
    location = models.charField(max_length=100)
    current_time = models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.location

# Create your models here.


# Create your models here.
