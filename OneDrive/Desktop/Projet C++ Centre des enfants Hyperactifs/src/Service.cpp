#include "service.h"
#include <string>
#include <iostream>

using namespace std;


Service::Service(int id_s,string nom_s,string desc,int f)
{
    id_service=id_s;
    nom_service=nom_s;
    description=desc;
    frais=f;

}
 void Service::saisir() {
    cout << "Entrez l'ID du service : ";
    cin >> id_service;

    cout << "Entrez le nom du service : ";
    cin>>nom_service ;

    cout << "Entrez la description du service : ";
    cin>>description ;

    cout << "Entrez les frais du service : ";
    cin >> frais;
}
istream& operator>>(istream&in,Service&s)
{
    cout << "Entrez l'ID du service : ";
    in >> s.id_service;

    cout << "Entrez le nom du service : ";
    in>>s.nom_service ;

    cout << "Entrez la description du service : ";
    in>>s.description ;

    cout << "Entrez les frais du service : ";
    in >> s.frais;
    return in ;
}

 void Service::afficher() {
    cout << "ID Service : " << id_service << endl;
    cout << "Nom Service : " << nom_service << endl;
    cout << "Description : " << description << endl;
    cout << "Frais : " << frais << endl;
}
ostream& operator<<(ostream& out  ,Service& serv)
{   out << "ID Service : " << serv.id_service << endl;
    out << "Nom Service : " << serv.nom_service << endl;
    out << "Description : " << serv.description << endl;
    out << "Frais : " << serv.frais << endl;
    return out;

}
Service::~Service()
{
    //dtor
}
