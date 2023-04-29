#include "Personne.h"
#include<iostream>
#include <string>

int Personne::nb_Perso = 0;

Personne::Personne(int idP, string nom, string prenom, int numTel, string adresse, Date dateNaissance)
{
    this->idP = idP;
    this->Nom = nom;
    this->Prenom = prenom;
    this->NumTelephone = numTel;
    this->Adresse = adresse;
    this->DateNaissance = dateNaissance;
    nb_Perso++;
}
Date Personne::getdateNaissance()const
{
    return DateNaissance;
}
void Personne::setdateNaissance(const Date& DateNaissance)
{
   this->DateNaissance=DateNaissance;
}
Personne::Personne(const Personne& p):DateNaissance(p.DateNaissance.getJour(), p.DateNaissance.getMois(), p.DateNaissance.getAnnee())
{
   idP = p.idP;
    Nom = p.Nom;
    Prenom = p.Prenom;
    Adresse = p.Adresse;
    NumTelephone = p.NumTelephone;


}
// Fonction pour modifier le telephone de la personne
void Personne::setTelephone(int& telephone) {
    this->NumTelephone = telephone;}
void Personne::saisir()
{
    cout<<"--------------------------"<<endl;
    cout<<"Donner l Id de la personne "<<endl;
    cin>>idP;
    cout<<"Donner le Nom de la personne"<<endl;
    cin>>Nom;
    cout<<"Donner le PreNom de la personne"<<endl;
    cin>>Prenom;
    cout<<"Donner l'Adresse de la personne"<<endl;
    cin>>Adresse;
    cout<<"Donner le Numero de telephone de la personne"<<endl;
    cin>>NumTelephone;
}
void Personne::afficher()
{
    cout<<"\n-------------------------"<<endl;
    cout<<"\nL ID de la personne: "<<idP<<endl;
    cout<<"\nLe Nom de la personne: "<<Nom<<endl;
    cout<<"\nLe Prenom de la personne: "<<Prenom<<endl;
    cout<<"\nLe numero de telephone de la Personne :"<<NumTelephone<<endl;
    cout<<"\n L'adresse de la personne :"<<Adresse<<endl;
    cout << "La Date de naissance de la personne: " << DateNaissance.getJour()
              << "/" << DateNaissance.getMois()
              << "/" << DateNaissance.getAnnee() << endl;}

Personne::~Personne()
{
    //dtor
}
istream& operator>> (istream& in, Personne& p)
{
    cout<<"Donner l Id de la personne "<<endl;
    in>>p.idP;
    cout<<"Donner le Nom de la personne"<<endl;
    in>>p.Nom;
    cout<<"Donner le PreNom de la personne"<<endl;
    in>>p.Prenom;
    cout<<"Donner l'Adresse de la personne"<<endl;
    in>>p.Adresse;
    cout<<"Donner le Numero de telephone de la personne"<<endl;
    in>>p.NumTelephone;

    // utiilisation de la m�thode setdateNaissance pour initialiser la date de naissance
    int jour, mois, annee;
    cout << "Donner la date de naissance de la personne" << endl;
    in >> jour >> mois >> annee;
    p.setdateNaissance(Date(jour, mois, annee));
    return in;
}
ostream& operator<< (ostream& out, Personne& p)
{
    cout<<"--------------------------"<<endl;
    out<<"Donner l Id de la personne "<<p.idP<<endl;
    out<<"Donner le Nom de la personne"<<p.Nom<<endl;
    out<<"Donner le PreNom de la personne"<<p.Prenom<<endl;
    out<<"Donner l'Adresse de la personne"<<p.Adresse<<endl;
    out<<"Donner le Numero de telephone de la personne"<<p.NumTelephone<<endl;
    out<<" Donner La date de naissance de la personne: "<<p.getdateNaissance().getJour()<<"/"<<p.getdateNaissance().getMois()<<"/"<<p.getdateNaissance().getAnnee()<<endl;
    return out;
}
//Personne& Personne::operator=(const Personne& other)
//{
  //  if (this != &other)
    //{
      //  this->id = other.id;
        //this->nom = other.nom;
        //this->prenom = other.prenom;
        //this->adresse = other.adresse;
        //this->dateNaissance = other.dateNaissance;
    //}
    //return *this;
//}


void Personne::modifierPersonne()
{
    string rep;
    cout << "\n---------------------------------" << endl;
    cout << "Voulez-vous modifier l'ID ?" << endl;
    cin >> rep;
    while (rep == "oui" || rep == "Oui")
    {
        cout << "Entrez la nouvelle valeur :" << endl;
        cin >> idP;
        cout << "Voulez-vous remodifier ?" << endl;
        cin >> rep;
    }

    cout << "Voulez-vous modifier le nom ?" << endl;
    cin >> rep;
    while (rep == "oui" || rep == "Oui")
    {
        cout << "Entrez la nouvelle valeur :" << endl;
        cin >> Nom;
        cout << "Voulez-vous remodifier ?" << endl;
        cin >> rep;
    }

    cout << "Voulez-vous modifier le prénom ?" << endl;
    cin >> rep;
    while (rep == "oui" || rep == "Oui")
    {
        cout << "Entrez la nouvelle valeur :" << endl;
        cin >> Prenom;
        cout << "Voulez-vous remodifier ?" << endl;
        cin >> rep;
    }

    cout << "Voulez-vous modifier l'adresse ?" << endl;
    cin >> rep;
    while (rep == "oui" || rep == "Oui")
    {
        cout << "Entrez la nouvelle valeur :" << endl;
        cin >> Adresse;
        cout << "Voulez-vous remodifier ?" << endl;
        cin >> rep;
    }

    cout << "Voulez-vous modifier le numéro de téléphone ?" << endl;
    cin >> rep;
    while (rep == "oui" || rep == "Oui")
    {
        cout << "Entrez la nouvelle valeur :" << endl;
        cin >> NumTelephone;
        cout << "Voulez-vous remodifier ?" << endl;
        cin >> rep;
    }

    cout << "Voulez-vous modifier la date de naissance ?" << endl;
    cin >> rep;
    while (rep == "oui" || rep == "Oui")
    {
        int jour, mois, annee;
        cout << "Entrez la nouvelle valeur (jj mm aaaa) :" << endl;
        cin >> jour >> mois >> annee;
        DateNaissance = Date(jour, mois, annee);
        cout << "Voulez-vous remodifier ?" << endl;
        cin >> rep;
    }
}
