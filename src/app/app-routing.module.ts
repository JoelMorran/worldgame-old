import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { MyTeamComponent } from './my-team/my-team.component';
import { AllPlayersComponent } from './all-players/all-players.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { HeadToHeadComponent } from './head-to-head/head-to-head.component';
import { LastGameComponent } from './last-game/last-game.component';
import { LeagueTableComponent } from './league-table/league-table.component';
import { PerformanceComponent } from './performance/performance.component';
import { SeasonComponent } from './season/season.component';




const routes: Routes = [
  { path: '', redirectTo: '/myteam', pathMatch: 'full' },
 { path: 'myteam', component: MyTeamComponent },
  { path: 'allplayers', component: AllPlayersComponent },
  { path: 'competitions', component: CompetitionsComponent },
  { path: 'headtohead', component: HeadToHeadComponent },
  { path: 'lastgame', component: LastGameComponent },
  { path: 'leaguetable', component: LeagueTableComponent },
  { path: 'performance', component: PerformanceComponent },
  { path: 'season', component: SeasonComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}