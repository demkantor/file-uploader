import React, {Component, useCallback, useEffect} from 'react';
import {connect} from 'react-redux';
import '../App/App.css';



class ReduxInfinitly extends Component {

  //bring in list of images stored on server
  componentDidMount =()=>{
    this.props.dispatch({ type: "GET_INFINITE_IMAGES", payload: this.props.reduxState.infinitePageReducer});
  }

  // lazy load images with intersection observer
  // lazyLoading = (ref, callback) => {
  //   React.useEffect(() => {
  //     const observer = new IntersectionObserver(
  //           if (entry.isIntersecting) {
  //             return this.props.dispatch({ type: "GET_INFINITE_IMAGES", payload: this.props.reduxState.infinitePageReducer});
  //           } else {
  //             console.log('oops')
  //           }
  //         ),
  //       { threshold: 0.25, rootMargin: "50px" }
  //     );
  //     React.useRef(null).current = observer;
  //   }, []);
  //   } 

 // infinite scrolling with intersection observer
InfiniteScroll = (scrollRef) => {
  this.props.dispatch({ type: "GET_INFINITE_IMAGES", payload: this.props.reduxState.infinitePageReducer});
    const scrollObserver = useCallback(
      node => {
        new IntersectionObserver(entries => {
          entries.forEach(en => {
            if (en.intersectionRatio > 0) {
              this.props.dispatch({ type: "INFINITE_page"});
            }
          });
        }).observe(node);
      },
      this.props.dispatch({ type: "INFINITE_page"})
      );
  
    useEffect(() => {
      if (scrollRef.current) {
        scrollObserver(scrollRef.current);
      }
    }, [scrollObserver, scrollRef]);
  }

  render() {
    return (
        <div className="">
        <nav className="navbar bg-light">
          <div className="container">
            <a className="navbar-brand" href="/#">
              <h2 className="text-center" >Infinite scroll + image lazy loading</h2>
            </a>
          </div>
        </nav>
  
        <div id='images' className="container">
        {this.props.reduxState.infiniteImageReducer &&
          <div className="row">
            {this.props.reduxState.infiniteImageReducer.images.map((image, index) => {
              const { author, download_url } = image
              return (
                <div key={index} className="card">
                  <div className="card-body ">
                    <img
                      alt={author}
                      data-src={download_url}
                      className="card-img-top"
                      src={'https://picsum.photos/id/870/300/300?grayscale&blur=2'}
                    />
                  </div>
                  <div className="card-footer">
                    <p className="card-text text-center text-capitalize text-primary">Shot by: {author}</p>
                  </div>
                </div>
              )
            })}   
          </div>
             }
        </div>
  
        {this.props.reduxState.infiniteImageReducer.fetching && (
          <div className="text-center bg-secondary m-auto p-3">
            <p className="m-0 text-white">Getting images</p>
          </div>
        )}
        <div onMouseOver={this.lazyLoading} id='page-bottom-boundary' style={{ border: '1px solid red' }} ref={this.props.reduxState.infinitePageReducer.page}></div>
      </div>
    )
  }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
  });
  
  export default connect(putReduxStateOnProps)(ReduxInfinitly);