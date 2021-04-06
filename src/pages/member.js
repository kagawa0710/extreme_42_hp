import React from 'react';
import PropTypes from 'prop-types';

import memberPosts from '../data/member';
import { withStyles } from '../tools/withStyles';
import { Main } from '../components/Main';
import { Post } from '../components/PostMember';
import { Secuence } from '../components/Secuence';
import { Text } from '../components/Text';

const styles = theme => ({
    root: {},
    seeMore: {
        marginTop: 20
    }
});

class Member extends React.Component {
    static propTypes = {
        classes: PropTypes.object
    };

    render() {
        const { classes } = this.props;

        return (
            <Main className={classes.root}>
                <Secuence stagger>
                    <header>
                        <h1><Text>Member</Text></h1>
                    </header>
                    {memberPosts.map((post, index) => (
                        <Post
                            key={index}
                            audio={{ silent: index > 4 }}
                            data={{ ...post, id: 'post' + index }}
                        />
                    ))}
                    {/* <p className={classes.seeMore}>
                        <Text>See more at</Text>
                        {' '}
                        <Link href='https://42tokyo.jp/'><Text>42tokyo</Text></Link>
                    </p> */}
                </Secuence>
            </Main>
        );
    }
}

export default withStyles(styles)(Member);
