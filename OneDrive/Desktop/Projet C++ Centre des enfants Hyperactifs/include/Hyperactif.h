#ifndef HYPERACTIF_H
#define HYPERACTIF_H
#include<iostream>
using namespace std;
#include<string>

#include "Enfant.h"
using namespace std;

class Hyperactif : public Enfant
{
    public:
        Hyperactif(int=0, string="",string="" , int=0 , long=0 ,string="");
        void saisir();
        void afficher();
        virtual ~Hyperactif();
         void Setduree(long x){duree=x ;};
        void Setmotif(string x){motif=x ;};
        friend istream& operator>>(istream&  ,Hyperactif&);
        friend ostream& operator<<(ostream&  ,Hyperactif& );

    protected:

    private:
         long duree ;
         string motif ;
};

#endif // HYPERACTIF_H
