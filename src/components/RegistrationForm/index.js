import './index.css'

import {Component} from 'react'

class RegistrationForm extends Component {
  state = {firstIp: '', lastIp: '', firstB: false, lastB: false, submit: false}

  firstChange = event => {
    this.setState({firstIp: event.target.value})
  }

  lastChange = event => {
    this.setState({lastIp: event.target.value})
  }

  firstBlur = event => {
    const fb =
      event.target.value === ''
        ? this.setState({firstB: true})
        : this.setState({firstB: false})
  }

  lastBlur = event => {
    const lb =
      event.target.value === ''
        ? this.setState({lastB: true})
        : this.setState({lastB: false})
  }

  submit = event => {
    event.preventDefault()
    const {firstIp, lastIp} = this.state

    if (firstIp === '') {
      this.setState({firstB: true})
    }

    if (lastIp === '') {
      this.setState({lastB: true})
    }
    if (firstIp !== '' && lastIp !== '') {
      this.setState(prev => ({submit: !prev.submit}))
    }
  }

  render() {
    const {firstIp, lastIp, firstB, lastB, submit} = this.state
    console.log(firstB)

    return (
      <div className="bg-container">
        <h1 className="h1">Registration</h1>
        <form className="form" onSubmit={this.submit}>
          {submit === false ? (
            <>
              <div className="ip-div">
                <label className="label" htmlFor="first">
                  FIRST NAME
                </label>
                <input
                  value={firstIp}
                  onBlur={this.firstBlur}
                  onChange={this.firstChange}
                  className={firstB === true ? 'input input-req' : 'input'}
                  id="first"
                  type="text"
                  placeholder="First name"
                />
                {firstB === true ? <p className="p">Required</p> : null}
              </div>
              <div className="ip-div">
                <label className="label" htmlFor="last">
                  LAST NAME
                </label>
                <input
                  value={lastIp}
                  onBlur={this.lastBlur}
                  onChange={this.lastChange}
                  className={lastB === true ? 'input input-req' : 'input'}
                  id="last"
                  type="text"
                  placeholder="Last name"
                />
                {lastB === true ? <p className="p">Required</p> : null}
              </div>
            </>
          ) : (
            <div className="s-div">
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
              />
              <p>Submitted Successfully</p>
            </div>
          )}
          <button className="btn" type="submit">
            {submit === false ? 'Submit' : 'Submit Another Response'}
          </button>
        </form>
      </div>
    )
  }
}

export default RegistrationForm
