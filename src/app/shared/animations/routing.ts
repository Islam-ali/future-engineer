import { trigger , transition, style, animate } from "@angular/animations";

export const animateRouting = trigger('routing' , [
    transition('* <=> *',[
        style({position:'relative',top:'-100px'}),
        animate('.5s', style({position:'relative',top:0}))
    ]),
])