#include "Medicale.h"

Medicale::Medicale(int a,string b,string d,int c,int id_m,string date_d,string date_f,string type_m,string des): Service( a,b,d,c)
 {

    id_Medicale=id_m;
    date_debut=date_d;
    date_fin=date_f;
    description=des;
    type_Med=type_m;

 }
void Medicale::saisir()
{ Service::saisir();
    cout<<"donner id du traitement medicale"<<endl;
    cin>>id_Medicale;
    cout<<"donner date de debut"<<endl;
    cin>>date_debut;
    cout<<"donner date de fin"<<endl;
    cin>>date_fin;
    cout<<"donner la decription"<<endl;
    cin>>description;
    cout<<"donner le type de traitement medicale"<<endl;
    cin>>type_Med;
}
 istream& operator>>(istream&in,Medicale&s)
 {
     Service*st =&s;
    in>>*st ;
    cout<<"donner id du traitement medicale"<<endl;
    in>>s.id_Medicale;
    cout<<"donner date de debut"<<endl;
    in>>s.date_debut;
    cout<<"donner date de fin"<<endl;
    in>>s.date_fin;
    cout<<"donner la decription"<<endl;
    in>>s.description;
    cout<<"donner le type d traitement medicale"<<endl;
    in>>s.type_Med;
    return in ;
 }
void Medicale::afficher() {
    Service::afficher(); // appel de la methode afficher de la classe de base
    cout << "ID du traitement Medicale : " << id_Medicale << endl;
    cout << "Date debut : " << date_debut << endl;
    cout << "Date fin : " << date_fin << endl;
    cout << "Type de traitement mdicale : " << type_Med << endl;
    cout << "Description : " << description << endl;
}
ostream& operator<<(ostream& out  ,Medicale& h)
{
    Service *s=&h;
    out<<*s;       // appel de la methode afficher de la classe de base
    out << "ID du traitement Medicale: " << h.id_Medicale << endl;
    out << "Date debut : " << h.date_debut << endl;
    out << "Date fin : " << h.date_fin << endl;
    out << "Type de traitement mdicale  : " << h.type_Med << endl;
    out << "Description : " << h.description << endl;
    return out;
}

Medicale::~Medicale()
{
    //dtor
}
