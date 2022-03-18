import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/solid'
import Button from 'components/small/button_fixed/Button'
import CustomComboBox from 'components/small/single_menu/CustomComboBox'
import Body1 from 'components/small/typography/Body1'
import { jenisAlatUkes } from 'constants/jenis-alat/JenisAlatUkes'
import { jenisPekerjaan } from 'constants/JenisPekerjaan'
import { Fragment } from 'react'
import FormPermohonanUji from './FormPermohonanUji'

export default function PermohonanUjiModal({isOpen, setIsOpen}) {
    function closeModal() {
        setIsOpen(false)
      }
    
      function openModal() {
        setIsOpen(true)
      }
  return (
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-grey-500 opacity-75" />
              {/* <Dialog.Overlay/> */}
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
            //   className="inline-block h-screen align-middle"
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {/* <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"> */}

              {/* <div className="inline-block w-full overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"> */}
              
              <div className="z-50 inline-block w-full h-screen pt-20 text-left align-middle transition-all transform">
                <div className="inline-block w-full h-5/6 overflow-hidden text-left bg-secondary-50s shadow-xl rounded-2xl">

                    <div className="flex items-center justify-between bg-primary py-6 px-8">
                        <Dialog.Title
                        as="h3"
                        className=" leading-6 text-white"
                        >
                        Permohonan Uji Baru
                        </Dialog.Title>
                        <button onClick={closeModal}>
                            <XIcon className="h-6 w-6 text-white cursor-pointer" aria-hidden="true"/>
                        </button>
                    </div>
                    <div className="flex h-full">
                        <div className="w-4/5 py-6 border-r border-grey-200">
                          <FormPermohonanUji/>
                            {/* <ul className="block w-full pl-10 pr-32 space-y-3">
                                <li className='flex items-center justify-between'>
                                    <Body1>
                                        Jenis Pekerjaan
                                    </Body1>
                                    <CustomComboBox itemLists={jenisPekerjaan}/>
                                </li>
                                <li className='flex items-center justify-between'>
                                    <Body1>
                                        Jenis Alat
                                    </Body1>
                                    <CustomComboBox itemLists={jenisAlatUkes}/>
                                </li>
                                <li>
                                    <Body1>
                                        Merk Alat
                                    </Body1>
                                </li>
                                <li>
                                    <Body1>
                                        Tipe Alat
                                    </Body1>
                                </li>
                                <li>
                                    <Body1>
                                        Kuantitas Alat
                                    </Body1>
                                </li>
                                <li>
                                    <Body1>
                                        Keterangan Alat
                                    </Body1>
                                </li>


                            </ul> */}
                        </div>
                        <div className="w-1/5 mt-4 space-y-4 px-4" >
                            <Button type="primary_default">
                                Buat Permohonan Uji
                            </Button>
                            <Button type="secondary_default" onClick={closeModal}>
                                Kembali
                            </Button>
                        </div>
                    {/* <p className="text-sm text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto necessitatibus quam et ipsum itaque. Quae, voluptatem. Nemo similique hic eligendi repellat officiis voluptates accusamus magnam! Provident, quisquam eum velit, minus tenetur iure voluptate similique laboriosam necessitatibus at corporis eos debitis quasi sit consequuntur ea obcaecati magni dolorum autem modi ullam reprehenderit. Delectus eius dolorem odio ipsam? Quisquam, reprehenderit! Soluta culpa dignissimos optio molestias asperiores dicta facere voluptates unde id ipsam expedita aperiam mollitia natus, repellat quos at, adipisci ullam! Optio ab tenetur, illum, reiciendis ducimus molestiae animi distinctio voluptas provident nulla nemo quae voluptatum veniam illo doloribus fuga voluptatem dolorem, ex pariatur aliquam. Dicta necessitatibus inventore ea quam animi quod odit porro et eaque perferendis delectus cum ab facilis natus, officiis quis culpa nobis. Sapiente, nihil dolorem incidunt perferendis aperiam nisi adipisci natus deserunt sed autem neque! Sunt, veritatis rerum eius deserunt, voluptatibus adipisci quidem totam ipsa cupiditate delectus alias accusamus nam ad reiciendis aliquam, dignissimos enim. Nemo eaque magnam voluptatibus ea dolorem, corrupti asperiores voluptates, dolorum eveniet perferendis sint aut omnis dolore perspiciatis? Eius cupiditate modi aliquam quis maxime perferendis unde praesentium nostrum quaerat blanditiis reprehenderit, nihil illo vero accusantium architecto tenetur. Ipsa, itaque labore quisquam pariatur maxime ex deleniti blanditiis ratione illum quibusdam nam, inventore temporibus impedit officia quia hic aspernatur tempora perspiciatis nemo iure odit quo neque. Maxime cumque quo a necessitatibus reiciendis nisi rerum aut fugiat asperiores expedita blanditiis, debitis quam saepe id accusantium ex sit deleniti dicta, dolore eveniet mollitia, veniam obcaecati. Dolor quae eligendi illo eaque provident deserunt. Officiis, dolorum nobis! Eveniet exercitationem aliquam earum, nobis beatae rem unde sint esse sed repudiandae, accusamus alias suscipit assumenda tempore voluptates a, debitis rerum. Ratione quis pariatur atque illo quaerat alias numquam deserunt sit. Fuga in suscipit quam esse nostrum accusantium optio placeat totam voluptas cum? Cumque, a ducimus quibusdam harum quod incidunt commodi quis dolores vel aliquid laborum dolorem tempore voluptatem culpa facilis maiores voluptates ut. Voluptatibus quos sit rem obcaecati molestiae dignissimos autem soluta quis explicabo enim iste, ullam dolore suscipit sunt sint dolor voluptatem harum magni odio. Consequuntur animi dicta temporibus, ab voluptates, praesentium sunt numquam enim mollitia, facilis officia maxime laborum vero eaque beatae incidunt quo quae expedita neque corrupti commodi. Obcaecati maiores pariatur magni impedit veritatis, doloremque necessitatibus ex placeat, architecto est commodi eos deserunt, fugit voluptatem cupiditate assumenda! Itaque, labore quae dolores quidem, adipisci ratione tenetur, a quo sit ducimus aliquid? Recusandae est qui voluptates quidem modi reprehenderit nihil blanditiis omnis mollitia rerum. Eum corrupti at impedit repudiandae maxime, temporibus hic cumque veniam suscipit quisquam deserunt, libero sit consequatur animi sed accusantium. Mollitia placeat esse ipsum amet eos nemo accusantium corrupti enim expedita, fuga exercitationem ullam et aperiam, culpa, rerum earum ea? Cumque magni enim voluptatum odit modi soluta nam laudantium amet blanditiis esse vel exercitationem mollitia, sit saepe praesentium, quod quaerat. Omnis praesentium velit rem magni quia, asperiores sit molestiae nulla facilis quis repudiandae dicta corrupti beatae consequatur dolorum aperiam magnam nostrum autem esse nobis perspiciatis consectetur? Tempore, ut esse hic nobis recusandae, libero sequi asperiores nam at eum fuga, dignissimos vel a. Velit dolores aut ab nesciunt quam sapiente eius dolorem est ducimus! Laborum libero autem quo consequuntur ratione, cupiditate a temporibus optio odio ipsa recusandae. Laboriosam modi facere magni quas reiciendis necessitatibus voluptatem nostrum. In numquam perspiciatis nisi adipisci sunt ipsa praesentium sit delectus animi, necessitatibus ullam dolor reprehenderit quod id quam perferendis debitis nam, iure nihil natus cumque. Facere ipsum ipsa quaerat. Dolor iure dolorum unde maxime vitae saepe aut repellendus perspiciatis debitis perferendis veritatis, hic voluptates, officia ut, provident velit itaque distinctio eaque soluta ipsum quae temporibus nihil! Fuga aut esse ad quaerat voluptatem quis accusamus delectus! Nobis facere quas harum cum distinctio. Nemo eius ut placeat, repellat nesciunt, ipsa molestiae commodi id debitis velit tenetur? Vel, iure! Modi similique ea illo rerum ipsa doloribus eos illum alias eligendi odit placeat corporis dolorem perferendis dignissimos iure magni voluptatem aliquid ab delectus nam, fugit iusto facilis? Molestiae laborum obcaecati aliquam? Praesentium consectetur dignissimos expedita illo! Obcaecati impedit culpa exercitationem natus eaque quos eius molestias minus quidem. Corrupti cumque ducimus fuga veniam delectus debitis quod officiis unde rem asperiores aperiam illo sunt, consequuntur autem. Fugit, quas provident?
                    </p> */}
                    </div>

                    
                </div>
              </div>
                  
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
  )
}
