#ifndef ENFANT_H
#define ENFANT_H
#include<iostream>
#include<string>
#include"personne.h"

using namespace std;

class Enfant : public Personne
{
protected :
    string Enf ;
    public:
        Enfant(Enfant&) ;
        Enfant(int=0 ,string="",string="" ,  int=0, string="");
        void saisir () ;
        void afficher () ;
        string getEnf(){
        return Enf;
        };
        friend istream& operator>>(istream&  ,Enfant& ) ;
        friend ostream& operator<<(ostream& ,Enfant& ) ;

        virtual ~Enfant();
        string getEnfanthyper(){return Enf;} ;

};

#endif // ENFANT_H
