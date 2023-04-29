#include "Enfant.h"

Enfant::Enfant(Enfant &w)
{
    Nom = w.Nom;
    idP = w.idP;
    NumTelephone = w.NumTelephone;
    Enf = w.Enf;
    Prenom = w.Prenom;
    Adresse=w.Adresse;

}

Enfant::Enfant(int d,string h, string c,  int a, string p) : Personne(d,h, c, a,p,Date(12,07,2001)), Enf("l")
{
}
void  Enfant::afficher() {
    cout << "l'enfant les attributs suivante : " << endl;
    Personne::afficher();
    cout << "Saisir l'etat de l'enfant" << Enf<< endl;
}



void Enfant::saisir()
{
    cout << "Saisir l'enfant" << endl;
    Personne::saisir();
    cout << "Saisir l'etat de l'enfant" << endl;
    cin >> Enf;
}

istream& operator>>(istream& in, Enfant& e)
{
    Personne *pt = &e;
    cout << "Saisir un enfant" << endl;
    in >> *pt;
    cout << "Saisir l'etat de l'enfant" << endl;
    in >> e.Enf;
    return in;
}

ostream& operator<<(ostream& out, Enfant& e)
{
    cout << "L'enfant :" << endl;
    Personne *pt = &e;
    cout << "Le prenom de l'enfant : " << e.getprenom() << endl;
    cout << "L'etat de l'enfant : " << e.getEnf() << endl;
    return out;
}

//string Enfant::getprenom() const
//{
//    return prenom;
//}

Enfant::~Enfant()
{
    //dtor
}
