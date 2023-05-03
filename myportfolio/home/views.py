from django.shortcuts import render, HttpResponse
from .models import Contact

# Create your views here.

def index(request):
    return render(request, 'home/index.html')

def contact(request):
    thank = False
    if request.method == 'POST':
        name = request.POST.get('name', '')
        email = request.POST.get('email', '')
        phone = request.POST.get('phone', '')
        text = request.POST.get('text', '')
        print(name, email, phone)
        contact = Contact(name=name, email=email, phone=phone, text=text)
        contact.save()
        thank = True
    return render(request, 'home/index.html', {'thank':thank})
