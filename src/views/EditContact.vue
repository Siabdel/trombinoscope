<template>
  <div>
    <div class="container" id="app_addcontact">
      <h1>Hello </h1>
      <div class="row">
        <ul class="list-inline">
          <li class="list-inline-item"> <router-link to="/"> Home </router-link> </li>
        </ul>
      </div>
      <div class="row">
        <form action="" method="POST">

          <div class="form-group">
            <input v-model="contacet.titre" type="text" class="form-control" placeholder="Votre titre" id="id_titre"> 
            <p class="help-block text-danger"></p>
          </div>
          <div class="form-group">
            <input v-model="contact.nom" type="text" class="form-control" placeholder="Votre nom" id="id_nom"> 
            <p class="help-block text-danger"></p>
          </div>
          <div class="form-group">
            <input v-model="contact.prenom" type="text" class="form-control" placeholder="Votre prenom " id="id_prenom"> 
            <p class="help-block text-danger"></p>
          </div>
          <div class="form-group">
            <input v-model="contact.email" type="email" class="form-control" placeholder="Votre Email *" id="id_email"> 
            <p class="help-block text-danger"></p>
          </div>
          <div class="form-group">
            <input v-model="contact.phone" type="text" class="form-control" id="phone" >
            <p class="help-block text-danger"></p>
          </div>

          <div class="form-group">
            <input type="submit" value="Enregistrez">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>



<script>

export default ({
    name : "EditContact",

    data() {
      return {
        titre : "",
        email : null,
        nom: null,
        prenom : false, 
        phone : true,
        ville : false,
      }
    },

    methods: {

      EditContact(){
        return true;
      },

    }

})

</script>
