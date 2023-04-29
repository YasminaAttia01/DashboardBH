#ifndef MEDICALE_H
#define MEDICALE_H

#include <Service.h>
#include <string>
#include <iostream>




class Medicale : public Service
{
    public:
        Medicale(int=0,string="",string="",int=0,int=0,string="",string="",string="",string="");
        void afficher();
        friend ostream& operator<<(ostream&   ,Medicale& );
        friend istream& operator>>(istream&,Medicale&) ;
        void saisir();
        virtual ~Medicale();

    protected:

    private:
        int id_Medicale;
      string date_debut;
      string date_fin;
      string type_Med;
      string description;
};

#endif // MEDICALE_H
