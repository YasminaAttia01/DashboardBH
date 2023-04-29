#ifndef EDUCATION_H
#define EDUCATION_H

#include <Service.h>
#include <iostream>


class Education : public Service
{
    int id_cours;
    string nom_cours;
    int nb_cours;
    public:
        Education(int=0,string="",string="",int=0,int=0,string="",int=0);
        void afficher();
        void saisir();
        friend istream& operator>>(istream&,Education&) ;
        friend ostream& operator<<(ostream&,Education& );
        virtual ~Education();

    protected:

    private:
};

#endif // EDUCATION_H
