<template>
   <div class="card card-menu">
    <img :src="image" class="card-img-top" />
    <div class="card-body pl-0">
      <h5 class="card-title font-weight-bold mb-0">{{ name }}</h5>
      <p class="card-text font-weight-bold">Rp. {{ price }}</p>
      <p>{{type}}</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Card",
        props: {
            image: {
                type: String,
                default: undefined
            },
            name: {
                type: String,
                default: undefined
            },
            price: {
                type: String,
                default: undefined
            },
            type: {
                type: String,
                default: undefined
            }
        }

    }
</script>

<style scoped>
    .cardContainer {
        width: 100%;
        height: 100%;

        margin-left: 240px;
        margin-top: 100px;
        display: flex;
        flex-wrap: wrap;


    }

    .card {
        box-shadow: -1px 7px 20px 0px #888;
        margin-left: 30px;
        margin-top: 30px;
        /* padding-top: 20px; */
        border: none;
        background: none;
        line-height: 10px;
        height: 300px;
        background-color: whitesmoke;
    }

    .card img {
        padding-top: 10px;
        align-items: center;
        height: 200px;
        padding-bottom: 10px;

    }

    .card-body {
        padding: 0 10px;

    }

    .card .card-text {
        font-weight: normal;
    }

    .card p {
        font-size: medium;
        margin: 10px 0;
    }


    .card .card-text {
        font-weight: normal;
    }

    @media (max-width: 576px) {
        .cardContainer {
            width: 100%;
            height: 100%;

            margin-left: 10px;
            margin-top: 50px;
            display: flex;
            flex-wrap: wrap;


        }

        .card {
            box-shadow: -1px 7px 20px 0px #888;
            margin-left: 0px;
            margin-top: 30px;
            /* padding-top: 20px; */
            border: none;
            background: none;
            line-height: 10px;
            height: 300px;
            background-color: whitesmoke;
        }

        .card img {
            padding-top: 10px;
            align-items: center;
            height: 200px;
            padding-bottom: 10px;

        }

        .card-body {
            padding: 0 10px;

        }

        .card .card-text {
            font-weight: normal;
        }

        .card p {
            font-size: medium;
            margin: 10px 0;
        }


        .card .card-text {
            font-weight: normal;
        }



    }

    @media (max-width: 768px) {
        .cardContainer {
            width: 100%;
            height: 100%;

            margin-left: 10px;
            margin-top: 50px;
            display: flex;
            flex-wrap: wrap;


        }

        .card {
            box-shadow: -1px 7px 20px 0px #888;
            margin-left: 30px;
            margin-top: 30px;
            /* padding-top: 20px; */
            border: none;
            background: none;
            line-height: 10px;
            height: 300px;
            background-color: whitesmoke;
        }

        .card img {
            padding-top: 10px;
            align-items: center;
            height: 200px;
            padding-bottom: 10px;

        }

        .card-body {
            padding: 0 10px;

        }

        .card .card-text {
            font-weight: normal;
        }

        .card p {
            font-size: medium;
            margin: 10px 0;
        }


        .card .card-text {
            font-weight: normal;
        }


    }


    @media (max-width: 1200px) {
        .cardContainer {
            width: 100%;
            height: 100%;

            margin-left: 10px;
            margin-top: 50px;
            display: flex;
            flex-wrap: wrap;


        }

        .card {
            box-shadow: -1px 7px 20px 0px #888;
            margin-left: 0px;
            margin-top: 30px;
            /* padding-top: 20px; */
            border: none;
            background: none;
            line-height: 10px;
            height: 300px;
            background-color: whitesmoke;
        }

        .card img {
            padding-top: 10px;
            align-items: center;
            height: 200px;
            padding-bottom: 10px;

        }

        .card-body {
            padding: 0 10px;

        }

        .card .card-text {
            font-weight: normal;
        }

        .card p {
            font-size: medium;
            margin: 10px 0;
        }


        .card .card-text {
            font-weight: normal;
        }


    }
</style>