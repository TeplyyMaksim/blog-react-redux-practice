import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from 'store/actions';
import UserHeader from 'components/UserHeader';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    const { posts } = this.props;

    return posts.map(({ id, title, body, userId }) => (
      <div className="item" key={id}>
        <i className="large middle aligned icon user" />
        <div className="content">
          <div className="description">
            <h2>{title}</h2>
            <p>{body}</p>
            <UserHeader userId={userId} />
          </div>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div className="ui relaxed divided list">
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => ({
  posts,
});

const mapDispatchToProps = {
  fetchPostsAndUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
