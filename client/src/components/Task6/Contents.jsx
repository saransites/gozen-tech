import React, { useEffect, useState } from "react";
import axios from "axios";

const Contents = () => {
  const [joke, setJoke] = useState();
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://official-joke-api.appspot.com/jokes/random"
      );
      setJoke(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (loading) return <h1 className="text-center text-2xl mt-2">loading...</h1>;
  return (
    <div className="p-6">
      <h1 className="text-center m-4">Random jokes</h1>
      <h1 className="text-md my-4">
        Question : <span className="text-2xl">{joke?.setup}</span>
      </h1>
      <h1 className="text-md my-4">
        punch line : <span className="text-2xl">{joke?.punchline}</span>
      </h1>
      below content is just a examble...
      <h1 className="mt-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
        fugiat provident non delectus? Laudantium aliquid, maxime excepturi
        totam accusantium officia saepe sequi sapiente commodi ipsam qui sit
        perspiciatis nostrum deleniti cupiditate debitis explicabo molestias
        aspernatur. Vitae totam, in quo illo ducimus ipsa rem vero reiciendis
        obcaecati. Voluptates, vel facilis eum quam accusamus, eos consequuntur
        nulla asperiores ipsum aperiam velit totam dolor adipisci nam distinctio
        rerum aspernatur nostrum esse! Vel earum eum sapiente repudiandae sint
        reprehenderit quia cum placeat minima aut eligendi commodi asperiores
        quaerat quos, corrupti possimus enim quasi nulla unde labore? Dolor
        temporibus perspiciatis nemo sint dolore optio delectus accusantium
        aperiam sapiente? Nemo voluptatem facilis ducimus alias. Libero
        delectus, quis laboriosam magnam quos optio veniam ipsam voluptas
        aperiam? Repellendus debitis provident ratione temporibus corporis quia,
        odit molestiae facere nulla, nesciunt voluptatem possimus nemo, unde
        aspernatur nostrum dolor! Rem ad dicta eveniet dolorum delectus sunt
        blanditiis repudiandae saepe dolore provident officiis, ab, recusandae
        molestias consequuntur laborum tempora a molestiae! Facilis optio ut at
        eum maiores asperiores sapiente fugit quidem accusamus, voluptates
        doloribus expedita enim quia quae, dolore non, delectus voluptatem atque
        quis! Alias quidem reiciendis quam nam quas dolorum ab eius adipisci
        nulla eos corrupti ut, quo vero perferendis. Et consectetur dicta
        possimus magnam similique, quasi aliquid nobis odit ex non ipsa deleniti
        eius perspiciatis illum, ab quisquam? Nihil minus accusantium deleniti
        porro alias cum quas eaque at dignissimos asperiores nisi, harum
        explicabo impedit recusandae placeat beatae delectus, atque quia!
        Asperiores minus exercitationem repellendus, eligendi sunt aut dolor
        ratione aliquam?
      </h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus vitae
        perspiciatis autem harum facilis iure eius ut nemo, doloremque
        voluptatum magnam eligendi iste ullam ratione maiores perferendis animi
        reprehenderit corporis optio vero? Atque voluptate quam vero voluptatem
        id temporibus nobis cupiditate. Sed porro dolor laudantium natus
        molestiae mollitia quam aliquam qui quidem debitis placeat, voluptatum
        totam ex excepturi, sequi obcaecati id, eum officia eius perferendis.
        Aperiam accusamus itaque maxime? Enim dolore quidem accusantium
        explicabo magnam, libero sunt facere. Minima reiciendis eveniet
        voluptatum. Quasi ipsa culpa porro corrupti officiis possimus rem, est
        labore obcaecati sunt non aliquam consequatur incidunt optio? Saepe?
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus vitae
        perspiciatis autem harum facilis iure eius ut nemo, doloremque
        voluptatum magnam eligendi iste ullam ratione maiores perferendis animi
        reprehenderit corporis optio vero? Atque voluptate quam vero voluptatem
        id temporibus nobis cupiditate. Sed porro dolor laudantium natus
        molestiae mollitia quam aliquam qui quidem debitis placeat, voluptatum
        totam ex excepturi, sequi obcaecati id, eum officia eius perferendis.
        Aperiam accusamus itaque maxime? Enim dolore quidem accusantium
        explicabo magnam, libero sunt facere. Minima reiciendis eveniet
        voluptatum. Quasi ipsa culpa porro corrupti officiis possimus rem, est
        labore obcaecati sunt non aliquam consequatur incidunt optio? Saepe?
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus vitae
        perspiciatis autem harum facilis iure eius ut nemo, doloremque
        voluptatum magnam eligendi iste ullam ratione maiores perferendis animi
        reprehenderit corporis optio vero? Atque voluptate quam vero voluptatem
        id temporibus nobis cupiditate. Sed porro dolor laudantium natus
        molestiae mollitia quam aliquam qui quidem debitis placeat, voluptatum
        totam ex excepturi, sequi obcaecati id, eum officia eius perferendis.
        Aperiam accusamus itaque maxime? Enim dolore quidem accusantium
        explicabo magnam, libero sunt facere. Minima reiciendis eveniet
        voluptatum. Quasi ipsa culpa porro corrupti officiis possimus rem, est
        labore obcaecati sunt non aliquam consequatur incidunt optio? Saepe?
      </p>
    </div>
  );
};

export default Contents;
