#ifndef PERSONNE_H
#define PERSONNE_H

#include<string>
#include<iostream>
#include<vector>
#include<fstream>
#include "Date.h"
using namespace std;

class Personne
{
    public:
        int idP;
        string Nom;
        string Prenom;
        int NumTelephone;
        string Adresse;
        Date DateNaissance;
        static int nb_Perso;

    public:
        Personne(int idP=0, string nom="", string prenom="", int numTel=0, string adresse="", Date dateNaissance=Date(12,07,2001));
        //Personne(int idP=0, string nom="", string prenom="", int numTel=0, string adresse="", Date dateNaissance=Date(12,07,2001), int age=0);

        Personne(int idP, string nom, string prenom, int numTel, string adresse, Date dateNaissance, int NUMcarte, string statut, float salaire);
        Personne(const Personne& personne);
        virtual ~Personne();
        friend istream& operator>> (istream&, Personne&);
        friend ostream& operator<< (ostream&, Personne&);
        virtual void afficher() = 0;
        virtual void saisir() = 0;
        Date getdateNaissance()const;
        void setdateNaissance(const Date& DateNaissance);
        string getnom() { return Nom; };
        string getprenom() { return Prenom; };
        string getAdresse(){return Adresse;};
        int getidP() { return idP; };
        int getNumTel(){return NumTelephone;};
        //Setters pour modifier l'adresse et le téléphone
        void setTelephone(int& telephone);
        void setAdresse(string& adresse);
        void modifierPersonne();
};

#endif // PERSONNE_H
