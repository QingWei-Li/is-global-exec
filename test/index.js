import test from 'ava'
import fn from '../'

test('is local', t => {
  t.false(fn())
  t.false(fn())
  t.false(fn())
})
