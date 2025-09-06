import React from 'react';
import { Route, Switch } from 'wouter';
import { ResumeBuilder } from './ResumeBuilder';
import { PortfolioVideo } from './PortfolioVideo';
import { OddsCalculator } from './OddsCalculator';
import { AdminDashboard } from './AdminDashboard';
import { Legal } from './Legal';
import { NotFound } from './NotFound';

export const Router: React.FC = () => (
  <Switch>
    <Route path="/resume" component={ResumeBuilder} />
    <Route path="/video" component={PortfolioVideo} />
    <Route path="/odds" component={OddsCalculator} />
    <Route path="/admin" component={AdminDashboard} />
    <Route path="/legal" component={Legal} />
    <Route>
      <NotFound />
    </Route>
  </Switch>
);
