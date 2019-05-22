import pyperclip

def uno(variable):
    producto = variable
    producto = producto.lower()
    lista = producto.split(" ")
    lista2= []
    
    for x in lista:
             lista2.append(x.capitalize())

    dos = ' '.join(lista2)
    pyperclip.copy(dos)

