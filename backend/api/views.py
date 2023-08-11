from django.contrib.auth.forms import UserCreationForm
from django.views.generic.edit import FormView

class CustomRegistrationView(FormView):
    template_name = 'registration/register.html'
    form_class = UserCreationForm
    success_url = '/accounts/login/'
