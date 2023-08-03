import { defineComponent } from "vue";
import packageConfig from "../../../../config.json";
import devConfig from "../config";
// import HelloWorld from '../components/HelloWorld.vue'

const config = JSON.parse(JSON.stringify(packageConfig));

export default function buildPage(name: string) {
  const url = `${devConfig[name]}/child/${name}`;

  return defineComponent({
    name,
    setup() {
      console.log(name, url);

      return () => (
        <div>
          <micro-app
            name={name}
            url="http://localhost:6001/"
            disableScopecss={config[name].disableScopecss}
            baseroute={`/base/${name}`}
          />
        </div>
      );
    },
  });
}
