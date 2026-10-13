# À faire plus tard

Petite liste de réglages à faire hors du code (Supabase, Vercel…).
Cocher une case (`[x]`) quand c'est fait.

---

## E-mails de confirmation de l'inscription

L'envoi d'e-mails intégré à Supabase n'en envoie que **quelques-uns par
heure**. Si plusieurs élèves s'inscrivent par e-mail en même temps,
certains ne recevront pas leur lien de confirmation. (Google n'a pas ce
problème.) Deux options :

### Option simple : désactiver la confirmation (recommandée pour démarrer)

- [ ] Supabase → **Authentication** → **Sign In / Providers** (selon la
      version : **Providers** → **Email**).
- [ ] Désactiver **Confirm email**.
- [ ] **Save**.

L'élève qui s'inscrit par e-mail est alors connecté tout de suite et
arrive sur `/acces`. Pas de risque : c'est toi qui actives chaque compte
à la main sur `/administration/acces`.

### Option propre : brancher un vrai service d'envoi (plus tard)

À faire si tu veux garder la confirmation par e-mail.

- [ ] Créer un compte gratuit sur **resend.com** et vérifier ton domaine.
- [ ] Supabase → **Project Settings** → **Authentication** →
      **SMTP Settings** → activer **Custom SMTP** et coller les
      identifiants donnés par Resend.

> Le lien « mot de passe oublié » envoie lui aussi un e-mail. Avec
> l'option simple, il reste limité à quelques envois par heure, ce qui
> suffit au début. L'option propre lève cette limite.
