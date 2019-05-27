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
    }),

    describe('filter column', function () {
        const wrapper = mount({
            template: `
              <div>
                <t-table ref="table" :data="testData" height="100px" width="200px">
                    <t-table-column prop="num" label="数字" :width="30" :filter="filterNum">
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
            },

            methods: {
                filterNum: function (val) {
                    return val.toFixed(2)
                }
            }
        })

        it('filter function', function () {
            let td = wrapper.find('.t-table-wrapper tr:first-child td:first-child')
            let l_td = wrapper.find('.t-table-wrapper tr:last-child td:last-child')
            expect(td.text()).to.be.eq('1.00')
            expect(l_td.text()).to.be.eq('h')
        })
    }),

    describe('table height and max height', function () {
        const wrapper = mount({
            template: `
              <div>
                <t-table ref="table" :data="testData" height="100px" width="200px" max-height="80px">
                    <t-table-column fixed prop="num" label="数字" :width="30">
                        <div slot="header">custom header</div>
                    </t-table-column>
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

        let el = wrapper.vm.$el

        let tableWraper = el.querySelector('.t-table-wrapper')
        
        let height = tableWraper.style.height
        let maxHeight = tableWraper.style.maxHeight
        it('bodyWrapper height', function () {
            expect(height).to.be.eq('50px')
        })
        it('bodyWrapper max height', function () {
            expect(maxHeight).to.be.eq('50px')
        })

        setTimeout(function () {
            let leftFixedWrapper = el.querySelector('.t-table-fixed-wrapper_left')
            let rightFixedWrapper = el.querySelector('.t-table-fixed-wrapper_right')
        
            it('left fixed wrapper hegiht', function (done) {
                expect(leftFixedWrapper.style.height).to.be.eq('100px')
                done()
            })
            it('left fixed wrapper max hegiht', function (done) {
                expect(leftFixedWrapper.style.maxHeight).to.be.eq('80px')
                done()
            })
            it('left fixed body wrapper height', function (done) {
                expect(leftFixedWrapper.querySelector('.t-table-fixed_body').style.maxHeight).to.be.eq('50px')
                done()
            })

            it('right fixed wrapper hegiht', function (done) {
                expect(rightFixedWrapper.style.height).to.be.eq('100px')
                done()
            })
            it('right fixed wrapper max hegiht', function (done) {
                expect(rightFixedWrapper.style.maxHeight).to.be.eq('80px')
                done()
            })
            it('right fixed body wrapper height', function (done) {
                expect(rightFixedWrapper.querySelector('.t-table-fixed_body').style.maxHeight).to.be.eq('50px')
                done()
            })
        }, 10)
        
    }),

    describe('table height and max height when no height prop', function () {
        const wrapper = mount({
            template: `
              <div>
                <t-table ref="table" :data="testData" width="200px" max-height="80px">
                    <t-table-column fixed prop="num" label="数字" :width="30">
                        <div slot="header">custom header</div>
                    </t-table-column>
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

        let el = wrapper.vm.$el

        let tableWraper = el.querySelector('.t-table-wrapper')
        
        let height = tableWraper.style.height
        let maxHeight = tableWraper.style.maxHeight
        it('bodyWrapper height', function () {
            expect(height).to.be.eq('50px')
        })
        it('bodyWrapper max height', function () {
            expect(maxHeight).to.be.eq('50px')
        })

        setTimeout(function () {
            let leftFixedWrapper = el.querySelector('.t-table-fixed-wrapper_left')
            let rightFixedWrapper = el.querySelector('.t-table-fixed-wrapper_right')
        
            it('left fixed wrapper hegiht', function (done) {
                expect(leftFixedWrapper.style.height).to.be.eql('')
                done()
            })
            it('left fixed wrapper max hegiht', function (done) {
                expect(leftFixedWrapper.style.maxHeight).to.be.eq('80px')
                done()
            })
            it('left fixed body wrapper height', function (done) {
                expect(leftFixedWrapper.querySelector('.t-table-fixed_body').style.maxHeight).to.be.eq('50px')
                done()
            })

            it('right fixed wrapper hegiht', function (done) {
                expect(rightFixedWrapper.style.height).to.be.eql('')
                done()
            })
            it('right fixed wrapper max hegiht', function (done) {
                expect(rightFixedWrapper.style.maxHeight).to.be.eq('80px')
                done()
            })
            it('right fixed body wrapper height', function (done) {
                expect(rightFixedWrapper.querySelector('.t-table-fixed_body').style.maxHeight).to.be.eq('50px')
                done()
            })
        }, 10)
        
    })
})
