import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "Home"
})
export default class HomeComponent extends Vue {
  @Prop() private msg!: string;
}
