#include "Administrateur.h"
#include"Employee.h"

//Administrateur::Administrateur(string a, string b, int c, int d, int e, string f, Date g, int h, string i, float j, string k)
  //  : Employee(a, b, c, d, e, f, g, h, i, j, k), departement("administrateur")
//{
//}

void Administrateur::saisir()
{
    Employee::saisir();
    departement = "administrateur";
}

void Administrateur::afficher()
{
    Employee::afficher();
    cout << "departement : administrateur" << endl;
}

istream& operator>>(istream& in, Administrateur& p)
{
    Employee* pt = &p;
    in >> *pt;
    return in;
}

ostream& operator<<(ostream& out, Administrateur& ad)
{
    Employee* e = &ad;
    out << *e;
    out << "departement : administrateur" << endl;
    return out;
}

Administrateur::~Administrateur()
{
    //dtor
}
