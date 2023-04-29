#include "Education.h"

Education::Education(int a,string b,string d,int c ,int id_c,string nom_c,int nb_c):Service( a,b,d,c)
{
    id_cours=id_c;
    nom_cours=nom_c;
    nb_cours=nb_c;
}
void Education::saisir()
{
    Service::saisir();
    cout<<"donner id du cours"<<endl;
    cin>>id_cours;
    cout<<"donner nom du cours"<<endl;
    cin>>nom_cours;
    cout<<"donner nbre du cours"<<endl;
    cin>>nb_cours;
}
istream& operator>>(istream&in,Education&s)
{
        Service*st =&s;
        in>>*st ;
    cout<<"donner id du cours"<<endl;
    cin>>s.id_cours;
    cout<<"donner nom du cours"<<endl;
    cin>>s.nom_cours;
    cout<<"donner nbre du cours"<<endl;
    cin>>s.nb_cours;
    return in ;
}

 void Education::afficher() {
    Service::afficher();
    cout << "ID cours : " << id_cours << endl;
    cout << "Nom du cours : " << nom_cours << endl;
    cout << "Nombre de cours : " << nb_cours << endl;
}
ostream& operator<<(ostream& out  ,Education& a)
{Service *s=&a;
    out<<*s;
    out << "ID cours : " << a.id_cours << endl;
    out << "Nom du cours: " << a.nom_cours << endl;
    out << "Nombre de cours : " << a.nb_cours << endl;

}

Education::~Education()
{
    //dtor
}
