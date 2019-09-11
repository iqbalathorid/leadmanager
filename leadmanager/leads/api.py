from leads.models import Lead
from rest_framework import viewsets, permissions
from .serializers import leadSerializers

#lead Viewset
class leadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = leadSerializers
