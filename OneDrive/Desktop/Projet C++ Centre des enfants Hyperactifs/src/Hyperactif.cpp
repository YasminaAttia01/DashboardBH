#include "Hyperactif.h"

Hyperactif::Hyperactif(int d, string h ,string c ,int a,long k,string e): Enfant(d,h,c,a,e)
{
    Enf="Hyperactif" ;
    duree=k;
    motif =e ;

}
void Hyperactif::saisir()
{
    Personne::saisir();
    Enf="Hyperactif";
    cout<<"saisir la duree "<<endl ;
    cin >> duree ;
    cout<<"saisir la motif "<<endl ;
    cin >> motif ;

}
 istream& operator>>(istream&in  ,Hyperactif&p )
{
    Personne *pt=&p ;
    in>>*pt ;
    cout<<"saisir la duree "<<endl ;
    in >> p.duree ;
     cout<<"saisir la motif "<<endl ;
    in >>p.motif ;
    return in ;

}
void Hyperactif::afficher()
{
    Enfant::afficher();
    cout <<"duree:"<< duree <<endl;
    cout <<"motif:"<< motif <<endl;

}
ostream& operator<<(ostream& out , Hyperactif&s)
{
    Enfant *p=&s;
    out<< *p ;
    out <<"duree:"<< s.duree <<endl;
    out <<"motif:"<< s.motif <<endl;
    return out;
}

Hyperactif::~Hyperactif()
{
    //dtor
}
