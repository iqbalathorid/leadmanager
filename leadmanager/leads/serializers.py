from rest_framework import serializers
from leads.models import Lead
 
#Lead Serializers 
class leadSerializers(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = '__all__'