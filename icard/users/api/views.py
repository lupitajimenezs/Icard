from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from django.contrib.auth.hashers import make_password
from rest_framework.views import APIView
from rest_framework.response import Response

from users.models import User
from users.api.serializers import UserSerializers

class UserApiViewSet(ModelViewSet):
    permission_classes = [IsAdminUser] #Solo tienen permiso los administradores
    serializer_class = UserSerializers
    queryset = User.objects.all()

    #override de la creación del usuario.
    def create(
        self,
        request,
        *args,
        **kwargs
    ):
        request.data['password'] = make_password(request.data['password'])
        return super().create(
            request,
            *args,
            **kwargs
        )

    def partial_update(self, request, *args, **kwargs):
        password = request.data['password']
        if password:
            request.data['password'] = make_password(password)
        else:
            request.data['password'] = request.user.password

        return super().update(request, *args, **kwargs)

class UserView(APIView):
    permission_classes = [IsAuthenticated] #Solo los autenticados podran consultar

    #Obtiendo los datos del usuario logueado
    def get(self, request):
        serializer = UserSerializers(request.user)
        return Response(serializer.data)