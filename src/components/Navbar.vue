<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="#">
                <router-link class="routerLink" to="/">MovieInfo</router-link>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav id="routeContainer" >
                    <b-nav-item class="navItems" href="#">
                        <router-link class="routerLink" to="/movies">Movies</router-link>
                    </b-nav-item>
                    <b-nav-item class="navItems" href="#">
                        <router-link class="routerLink" to="/actors">Actors</router-link>
                    </b-nav-item>
                </b-navbar-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-form-input id="searchArea" size="md" class="mr-sm-2" placeholder="Search"></b-form-input>
                    </b-nav-form>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<style scoped>
#routeContainer{
    text-align: center !important;
}

.navItems {
    margin-right: 10px;
    border-radius: 2px;
    border: 1px solid transparent;
    transition: border 1s;
}

.navItems:hover {
    border: 1px solid lightblue;
}

.routerLink{
    color: white;
}

.routerLink:hover{
    text-decoration: none;
}
#searchArea{
    width: 300px;
    transition: width 0.7s;
}

#searchArea:hover{
    width: 500px;
}
</style>
