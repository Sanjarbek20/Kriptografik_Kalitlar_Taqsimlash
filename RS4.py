from math import *
print(' matin shifrlamoqchi bo\'lsangiz A ni kiriting \n deshifrlamoqchi bo\'lsangiz D ni kiriting')
S=(input('A yoki D : '))

if ord(S)==65 :
    print(' Siz kalit sifatida tub sonlardan foydalanishingiz \n mumkin buning uchun n ga chegara qiymat bering')
    n=int(input('n='))
    I=[]
    for i in range(1,n):
        tubson=True
        for j in range(2,i):
            if i%j==0:
               tubson=False
               break
        if tubson==True:
            I.append(i)
    print(I)
    s=list(map(str, input('Shifrlanishi kerak bo\'lgan matinni kiriting : ')))
    print('o\'zaro tub bo\'lgan ikkita son kiriting')
    N=len(s)
    p=int(input('1-son p = '))
    q=int(input('2-son q = '))
    m=p*q
    fn=(q-1)*(p-1)
    
    
    l=[]
    for i in range(2,fn):
        tubson=True
        for j in range(2,i):
            if i%j==0:
               tubson=False
               break
        if tubson==True :
        
            if fn%i==0:
                l.append(i)
    print(' fn ning tub ko\'paytuvchilari :')
    print(l)
    L=len(l)
    print(L)
    y=[]
    for k in range(2,fn):
        tubson=True
        for h in l:
            if k%h==0:
                tubson=False
                #y.append(k)
                break
        if tubson==True :
            y.append(k)
    print(' e ni qiymatini shulardan tanlang :') 
    print(y)
        
    e=int(input('e = '))
    Z=[]
    for z in range(1,1000):
        if (z*e)%fn==1:
            Z.append(z)
        
    print(' d ning qiymatlari : ', Z)
    chrb=[]
    for i in range(0,N):
        if (ord(s[i])<96): d=ord(s[i])-64
        else: d=ord(s[i])-96
        b=d**e%m
       # chrb.append((b))
       # print(chrb)
        print(chr(b),end='')
    
elif ord(S)==68:
    b=input('b=')
    d=int(input('d='))
    n=int(input('n='))
    N=len(b)
    for i in range(0,N):
        H=ord(b[i])
        a=H**d%n
        print(chr(a+64),end='')
else : print('A yoki D ni tanlang :')
