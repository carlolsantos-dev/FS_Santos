from rest_framework import serializers
from .models import Product

# Serializer validate data
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'