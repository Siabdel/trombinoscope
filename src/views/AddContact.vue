<template>
  <div>
    <div class="container" id="app_addcontact">
      <h1>Add contacte </h1>
      <div class="row">
        <ul class="list-inline">
          <li class="list-inline-item"> <router-link to="/"> Home </router-link> </li>
        </ul>
      </div>
      <div class="row">
        <form action="" method="POST" @submit.prevent="createContact"  id="id_form_contact">

          <div class="form-group">
            <input v-model="contact.user_id" type="hidden"  name="user_id" value="1"> 
            <input v-model="contact.titre" type="text" class="form-control" placeholder="Votre titre" id="id_titre"> 
            <p class="help-block text-danger"></p>
          </div>
          <div class="form-group">
            <input v-model="contact.nom" type="text" class="form-control" placeholder="Votre nom" name="nom" id="id_nom"> 
            <p class="help-block text-danger"></p>
          </div>
          <div class="form-group">
            <input v-model="contact.prenom" type="text" class="form-control" placeholder="Votre prenom " name="prenom" id="id_prenom"> 
            <p class="help-block text-danger"></p>
          </div>
          <div class="form-group">
            <input v-model="contact.email" type="email" class="form-control" placeholder="Votre Email" name="email" id="id_email"> 
            <p class="help-block text-danger"></p>
          </div>
          <div class="form-group">
            <input v-model="contact.telephone" type="text" class="form-control"  placeholder="Votre numéro de téléphone" name="telephone" id="phone" >
            <p class="help-block text-danger"></p>
          </div>

          <div class="form-group">
            <input type="submit" value="Enregistrez" >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>



<script>

import $ from 'jquery'

export default {
    name : "AddContact",

    data() {
      return {
        contact : { 
          user_id: "1",
          titre : "",
          email : "",
          nom: "",
          prenom : "", 
          telephone : "",
        }
      }
    },

    methods: {

      createContact(){
        //const url = 'http://127.0.0.1:91/apipro/contact/create/'
        const url = 'http://127.0.0.1:8000/apipro/contact/create/'
        //const csrftoken = getCookie('CSRF-TOKEN');
        //console.log("cle CSRF " + csrftoken)
        //let  cle_csrf = $( "input[name='csrfmiddlewaretoken']" ).val()
        let nom = $( "input[name='nom']" ).val()
        console.log("contact name " + nom)

        /** form = JSON.stringify({
        'content' : content,
        }) **/

        let form = $( "#id_form_contact" ).serialize()
        
        let data = JSON.stringify(form) // on
        console.log("form serialize = " + data)
        // request
        const headers = {
              //"Content-Type": "application/x-www-form-urlencoded",
              'Content-Type': 'application/json; charset=UTF-8',
              'Accept': 'application/json',
              //'X-CSRFToken': csrftoken,
            // "authToken" : "ACCESS_TOKEN",
          }

          fetch(url,
            {
              method : 'POST',
              credentials: "same-origin",
              headers : headers,
              body : form,
            }
          ).then(response => {
              console.log("la reponse = " + response )
              this.hide_form()
          })
          .catch((err)=>console.log( err))
          },

      },


}

</script>
