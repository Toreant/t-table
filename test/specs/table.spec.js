const expect = require('chai').expect
const { toArray } = require('./utils')
import { mount } from '@vue/test-utils'

import TTable from '../../src/table.vue'
import TTableColumn from '../../src/table-column'

const DELAY = 1000

function getTestData() {
    return [
        {
            num: 1, name: 'y',
        },
        {
            num: 2, name: 'h'
        }
    ]
}

describe('test the table', function () {
    describe('normal column', function () {
        const wrapper = mount({
            template: `
              <div>
                <t-table :data="testData" height="100px" width="200px">
                    <t-table-column prop="num" label="数字" :width="30"></t-table-column>
                    <t-table-column prop="name" label="名字" :width="30"></t-table-column>
                </t-table>
              </div>
            `,

            components: {
                TTable,
                TTableColumn
            },

            created() {
                this.testData = getTestData()
            }
        })
        const vm = wrapper.vm
        
        it('head title', done => {
            let ths = wrapper.findAll('.t-table-header-wrapper th')
            let titles = ths.wrappers.map(item => item.text())
            expect(titles).to.be.eql(['数字', '名字'])
            done()
        })
    }),

    describe('fixed columns', function () {
        const wrapper = mount({
            template: `
              <div>
                <t-table ref="table" :data="testData" height="100px" width="200px">
                    <t-table-column fixed prop="num" label="数字" :width="30"></t-table-column>
                    <t-table-column fixed="right" prop="name" label="名字" :width="30"></t-table-column>
                </t-table>
              </div>
            `,

            components: {
                TTable,
                TTableColumn
            },

            created() {
                this.testData = getTestData()
            }
        })

        it('left fixed_column is not empty', function () {
            expect(wrapper.contains('.t-table-fixed-wrapper_left')).to.be.eq(true)
        })

        it('left fixed columns width is 30', done => {
            let fixedColumns = wrapper.vm.$refs.table.leftFixColumnWidth
            expect(fixedColumns).to.be.eq(30)
            done()
        })

        it('right fixed columns width is 30', done => {
            let fixedColumns = wrapper.vm.$refs.table.rightFixColumnWidth
            expect(fixedColumns).to.be.eq(30)
            done()
        })
    }),

    describe('custom column header', function () {
        const wrapper = mount({
            template: `
              <div>
                <t-table ref="table" :data="testData" height="100px" width="200px">
                    <t-table-column prop="num" label="数字" :width="30">
                        <div slot="header">custom header</div>
                    </t-table-column>
                    <t-table-column prop="name" label="名字" :width="30"></t-table-column>
                </t-table>
              </div>
            `,

            components: {
                TTable,
                TTableColumn
            },

            created() {
                this.testData = getTestData()
            }
        })

        it('custom header content', function () {
            let th = wrapper.find('.t-table-header-wrapper th')
            expect(th.text()).to.be.eq('custom header')
        })
    })
})
