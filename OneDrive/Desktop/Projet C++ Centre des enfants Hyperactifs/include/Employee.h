#ifndef EMPLOYEE_H
#define EMPLOYEE_H

#include<iostream>
#include<string>
#include"Personne.h"
#include"Date.h"

using namespace std;

class Employee : public Personne
{
protected:
    int NUMcarte;
    string statut;
    float salaire;

public:
    Employee(Employee&);
    Employee(string a, string b, int c, int d, int e, string f, Date g, int h, string i, float j) : Personne(c, a, b, d, f, g)
    {
        NUMcarte = h;
        statut = i;
        salaire = j;
    }
    Employee() : Personne(), NUMcarte(0), statut(""), salaire(0.0) {}
    Employee(int id, string nom, string prenom, int age, string adresse, Date dateNaissance, int num, string stat, float sal)
: Personne(id, nom, prenom, age, adresse, dateNaissance), NUMcarte(num), statut(stat), salaire(sal) {}


    virtual void afficher() override;
    virtual void saisir() override;
    friend istream& operator>>(istream&, Employee&);
    friend ostream& operator<<(ostream&, Employee&);
    virtual ~Employee() {}
};

#endif // EMPLOYEE_H
