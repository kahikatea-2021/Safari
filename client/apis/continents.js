import request from 'superagent'

const rootUrl = '/api/v1'

export function getContinents () {
  return request.get(rootUrl + '/continents')
    .then(res => {
      return res.body.continents
    })
}
