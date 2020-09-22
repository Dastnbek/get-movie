<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="#">MovieInfo</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="#">
                    <router-link to="/">Movies</router-link>
                </b-nav-item>
                <b-nav-item href="#">
                    <router-link to="/about">TV shows</router-link>
                </b-nav-item>
                <b-nav-item href="#">
                    <router-link to="/about">Actors</router-link>
                </b-nav-item>
            </b-navbar-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                </b-nav-form>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
