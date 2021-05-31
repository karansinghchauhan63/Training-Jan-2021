import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrisisCenterHomeComponent } from '../crisis-center-home/crisis-center-home.component';
import { CrisisCenterComponent } from '../crisis-center/crisis-center.component';
import { CrisisDetailComponent } from '../crisis-detail/crisis-detail.component';
import { CrisisListComponent } from '../crisis-list/crisis-list.component';

// const routes: Routes = [
//   {
//     path: 'crisis-center',
//     component: CrisisCenterComponent,
//     children: [
//       {
//         path: '',
//         component: CrisisListComponent,
//         children: [
//           {
//             path: 'detail:id',
//             component: CrisisDetailComponent
//           },
//           {
//             path: '',
//             component: CrisisCenterHomeComponent
//           }
//         ]
//       }
//     ]
//   }
// ];
const routes: Routes = [
  { path: 'crisis-center',  component:CrisisCenterComponent  },
  { path: 'crisis-center/:id', component: CrisisDetailComponent  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrisisRoutingModule { }
