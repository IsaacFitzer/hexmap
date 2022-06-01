import React from 'react';

class TagButtons extends React.Component {
    constructor(props) {
        super(props);

        this.state = {selected: ''}
    }

    onTagClick = (e) => {
        this.props.onTagClick(e.target.id)
    }

    

    render() {
        return (
            <div id='tagBtnsContainer'>
                {window.tagPool.map(tagGroup =>
                    <div className='btn-group' style={{marginTop: '4px', marginRight: '10px'}}>
                        {tagGroup.map(tag => {
                            return <button id={tag} onClick={this.onTagClick}>{tag}</button>
                        })}
                    </div>
                )}
            </div>
        )
    }
}

export default TagButtons