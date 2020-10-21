
git pull
printf "Voulez vous écrire un message? (o/n)\n"
read -r messaggio
if [ $messaggio == 'o' ]
then
   printf "Ecrire ici le message \n"
   read -r messaggioVeroEProprio
   git commit -m "${messaggioVeroEProprio}"
else
   git commit -m "dernière mise à jour"
fi
git push