#include "Employee.h"

//Employee::Employee(string a, string b, int c, int d, string e, Date f, int g, string h, float i) : Personne(c, a, b, d, e, f)
//{
  //  NUMcarte = g;
   // statut = h;
    //salaire = i;
//}
Employee::Employee(Employee &w): Personne(w.idP, w.Nom, w.Prenom, w.NumTelephone, w.Adresse, Date(12,07,2001))
{
    NUMcarte = w.NUMcarte;
    statut = w.statut;
    salaire = w.salaire;
}

void Employee::saisir()
{
    cout<<"saisir un employee"<<endl ;
    Personne::saisir() ;
    string msg="le numero doit comporter 8 chiffres" ;
    try{

    cout<<"saisir la numero dr carte d'employee "<<endl ;
    cin >> NUMcarte ;
    if ((NUMcarte>99999999)||(NUMcarte<10000000)) throw (msg);
    }
    catch(string m)
    {
        cout<<"erreur"<<m<<endl;
    }
    cout<<"saisir statut d'employee "<<endl ;
    cin >> statut ;
    cout<<"saisir salaire d'employee "<<endl ;
    cin >> salaire ;

}
istream& operator>>(istream&in  ,Employee&p )
{
    cout<<"saisir un employee"<<endl ;
    Personne *pt=&p ;
    in>>*pt ;
    string msg="le numero doit comporter 8 chiffres" ;
     try{
    cout<<"saisir la numero de carte d'employee(8 chiffres) "<<endl ;
    in >> p.NUMcarte ;
    if ((p.NUMcarte>99999999)||(p.NUMcarte<10000000)) throw (msg);
    }
    catch(string m)
    {
        cout<<"erreur"<<m<<endl;
    }
    cout<<"saisir statut d'employee "<<endl ;
    in >> p.statut ;
    cout<<"saisir salaire d'employee "<<endl ;
    in >> p.salaire ;
    return in ;
}
void Employee::afficher()
{
    cout<<"employee "<<endl ;
    Personne::afficher() ;
    cout << "statut :"<<statut << endl ;
    cout << "salaire : "<<salaire<<endl ;
}
ostream& operator<<(ostream& out ,Employee& e)
{
    out<<"employee "<<endl ;
    Personne *p=&e;
    out<<*p;
    out << "statut :"<<e.statut << endl ;
    out << "salaire : "<<e.salaire<<endl ;
    return out;
}
