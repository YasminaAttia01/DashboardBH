#ifndef CENTRE_H
#define CENTRE_H
#include <iostream>
#include <string>
#include <vector>
#include <fstream>
#include <iomanip>

using namespace std;
class Employee;
class Service;
class Enfant;
class Personne;


class Centre
{
    int id_centre;
    string nom_centre;
    string adresse_centre;
    float budget_centre;
    int nbre_Enfants;
    int nbr_dispo;
    int nbr_employe;
    int nbr_service;
    vector<Service*> serv;
    vector<Employee*> emp;
    vector<Enfant*> enf;
    vector<Personne*> pers;

    public:
        Centre(int=0,string="",string="",float=0,int=0,int=0,int=0,int=0);
        friend istream& operator>>(istream&, Centre&);
        friend istream& operator>>(istream&, Centre*);
        friend ostream& operator<<(ostream&, Centre&);
        friend ostream& operator<<(ostream&, Centre*);
        void ajouter_pers(Enfant*);
        void ajouter_emp(Employee*);
        int supprimer_pers(int);
        int recherche_pers(int);
        float calcul_budget();
        void creer(fstream&);
        void remplir(fstream&);
        void afficher(fstream&);
        virtual ~Centre();


    protected:

    private:
};

#endif // CENTRE_H
