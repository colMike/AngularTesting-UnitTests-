import { VoteComponent } from './vote.component';

describe('VoteComponent(event emitter)', () => {
  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise vote change event after upvoting', () => {
    let totalVotes: any = null;

    component.voteChanged.subscribe(tv =>{
      totalVotes = tv;
    });

    component.upVote();


    expect(totalVotes).toBe(1);

  });
});
